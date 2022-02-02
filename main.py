
from ElasticSearch.elastic_search_integraion_package import ESIndexManager

if __name__ == '__main__':
    file = r'C:\Users\Oz Ohayon\user data\meta_data.xlsx'
    mapping = {
        "mappings": {
            "properties": {
                "location": {
                    "type": "geo_point"
                }
            }
        }
    }

    sample_manager = ESIndexManager('sample', file)

    if not sample_manager.create_index(mapping):
        exit(1)

    failed_docs = sample_manager.add_documents()
