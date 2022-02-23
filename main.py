
from ElasticSearch.elastic_search_integraion_package import ESIndexManager, SampleDoc, TaxonomyDoc
from ElasticSearch.read_excel_meta_data import ReadExcel

if __name__ == '__main__':
    test_sample = True
    test_taxonomy = True
    file_sample = r'C:\Users\Oz Ohayon\user data\meta_data.xlsx'
    file_taxonomy = r"C:\Users\Oz Ohayon\user data\taxonomy_levels_sample_28.xlsx"

    mapping_sample = {
        "properties": {
            "location": {
                "type": "geo_point"
            }
        }
    }

    mapping_taxonomy = {
        "mappings": {
            "properties": {
            }
         }
    }


    # Creating Docs:
    index_sample = 'test_plant'
    index_taxonomy = 'test_taxonomy2'

    sample_reader = ReadExcel(file_sample, index_col=0)
    taxonomy_reader = ReadExcel(file_taxonomy)

    sample_docs = sample_reader.read()
    taxonomy_docs = taxonomy_reader.read()
    # taxonomy_docs = taxonomy_reader.get_groups()
    index_manager = ESIndexManager()

    if test_sample:
        if not index_manager.create_index(index_sample, mapping_sample):
            exit(1)
        failed_docs = index_manager.add_documents(index_sample, SampleDoc, sample_docs)
    if test_taxonomy:
        # if not index_manager.create_index(index_taxonomy):
        #     exit(1)
        failed_docs = index_manager.add_documents(index_taxonomy, TaxonomyDoc, taxonomy_docs)



