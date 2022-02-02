from elasticsearch import Elasticsearch, RequestError
from datetime import datetime
from ElasticSearch.read_excel_meta_data import ReadExcel


class SampleDoc:
    def __init__(self, doc: dict):
        self.doc_dict = doc
        self.doc_dict['timestemp'] = datetime.now()
        self._set_location()

    def _set_location(self):
        self.doc_dict['location'] = {
            'lat': self.doc_dict.pop('latitude'),
            'lon': self.doc_dict.pop('longitude')
        }

    @property
    def doc(self):
        return self.doc_dict


class ESIndexManager:
    def __init__(self, index_name, file):
        self.es = Elasticsearch()
        reader = ReadExcel(file)
        self.docs = reader.read()
        self.index_name = index_name

    def create_index(self, mapping) -> bool:
        if self.es.indices.exists(index=self.index_name):
            return True
        try:
            self.es.indices.create(index=self.index_name, body=mapping)
        except RequestError as e:
            return False
        return True

    def add_documents(self) -> list:
        failed_docs = []
        for doc in self.docs:
            doc_obj = SampleDoc(doc)
            try:
                self.es.index(index=self.index_name, document=doc_obj.doc)
            except Exception as e:
                failed_docs.append(doc)
                print(e)
            self.es.indices.refresh(index='sample')
        return failed_docs
