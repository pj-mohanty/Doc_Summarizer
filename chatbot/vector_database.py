from langchain_community.document_loaders import PDFPlumberLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_ollama import OllamaEmbeddings
from langchain_community.vectorstores import FAISS


pdfs_directory = 'pdfs/'

def upload_pdf(file):
    with open(pdfs_directory + file.name, "wb") as f:
        f.write(file.getbuffer())

def load_pdf(file_path):
    loader = PDFPlumberLoader(file_path)
    documents = loader.load()
    return documents

file_path = 'universal_declaration_of_human_rights.pdf'
documents = load_pdf(file_path)

def create_chunks(documents): 
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
        add_start_index=True
    )
    text_chunks = text_splitter.split_documents(documents)
    return text_chunks

text_chunks = create_chunks(documents)

ollama_model_name = "deepseek-r1:1.5b"

def get_embedding_model(ollama_model_name):
    embeddings = OllamaEmbeddings(model=ollama_model_name)
    try:
        sample_text = ["This is a test document."]
        embedded_docs = embeddings.embed_documents(sample_text)
        print("Embedded Documents:", embedded_docs)  
        return embeddings
    except Exception as e:
        print("Error occurred while embedding:", e)
        return None

FAISS_DB_PATH = "vectorstore/db_faiss"

embedding_model = get_embedding_model(ollama_model_name)

if embedding_model is not None:
    faiss_db = FAISS.from_documents(text_chunks, embedding_model)
    faiss_db.save_local(FAISS_DB_PATH)
else:
    print("Failed to initialize embedding model.")
