import pandas as pd
from dataclasses import dataclass


@dataclass
class ReadExcel:
    file_path: str

    def read(self) -> list:
        docs = []
        data_frame = pd.read_excel(self.file_path)
        for data in data_frame.to_dict('records'):
            docs.append(data)
        return docs
