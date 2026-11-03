# Python AI / ML Ecosystem

Danh sách các thư viện, framework và công cụ phổ biến trong hệ sinh thái Python dành cho Artificial Intelligence (AI), Machine Learning (ML), Deep Learning và Generative AI.

## 1. Data Processing

| Tool | Description |
|---|---|
| NumPy | Numerical computing, matrix operations |
| Pandas | DataFrame, data manipulation |
| Polars | High-performance DataFrame |
| PyArrow | Columnar data processing, Apache Arrow |
| Dask | Parallel and distributed computing |
| DuckDB | Analytical SQL database |

## 2. Data Visualization

| Tool | Description |
|---|---|
| Matplotlib | Basic plotting and visualization |
| Seaborn | Statistical data visualization |
| Plotly | Interactive charts |
| Bokeh | Interactive visualization |
| Altair | Declarative statistical visualization |

## 3. Traditional Machine Learning

| Tool | Description |
|---|---|
| Scikit-learn | Classification, regression, clustering |
| XGBoost | Gradient boosting framework |
| LightGBM | High-performance gradient boosting |
| CatBoost | Gradient boosting for categorical data |
| Statsmodels | Statistical modeling and analysis |

## 4. Deep Learning Frameworks

| Tool | Description |
|---|---|
| PyTorch | Deep learning framework |
| TensorFlow | Deep learning and model deployment |
| Keras | High-level neural network API |
| JAX | High-performance numerical computing and automatic differentiation |

## 5. Computer Vision

| Tool | Description |
|---|---|
| OpenCV | Image and video processing |
| Pillow | Image manipulation |
| Ultralytics YOLO | Object detection |
| Detectron2 | Object detection and segmentation |
| MMDetection | Object detection toolbox |
| Torchvision | Computer vision models and datasets |

## 6. Natural Language Processing (NLP)

| Tool | Description |
|---|---|
| NLTK | Fundamental NLP operations |
| spaCy | Tokenization, NER and NLP pipelines |
| Gensim | Topic modeling and Word2Vec |
| Stanza | Multilingual NLP |
| Sentence Transformers | Text embeddings and semantic similarity |

## 7. LLM & Generative AI

| Tool | Description |
|---|---|
| Hugging Face Transformers | Pretrained language models |
| Diffusers | Image and video diffusion models |
| PEFT | Parameter-efficient fine-tuning, LoRA |
| TRL | RLHF and model post-training |
| vLLM | High-throughput LLM inference |
| llama.cpp | Local LLM inference |
| Unsloth | Efficient LLM fine-tuning |
| Ollama | Local model management and inference |

## 8. AI Agents & RAG

| Tool | Description |
|---|---|
| LangChain | LLM application framework |
| LangGraph | Stateful agent workflows |
| LlamaIndex | Data ingestion and RAG |
| Haystack | Search and RAG pipelines |
| DSPy | Programming and optimization of LM pipelines |
| PydanticAI | Typed AI agent framework |
| CrewAI | Multi-agent orchestration |
| AutoGen | Multi-agent conversation framework |

## 9. Vector Database & Search

| Tool | Description |
|---|---|
| FAISS | Vector similarity search |
| ChromaDB | Vector database |
| Qdrant | Vector search engine |
| Milvus | Scalable vector database |
| Weaviate | Vector database |
| Sentence Transformers | Embedding generation |

## 10. Model Evaluation & Experiment Tracking

| Tool | Description |
|---|---|
| MLflow | Experiment tracking and model registry |
| Weights & Biases | Training monitoring |
| TensorBoard | Metrics and model visualization |
| Optuna | Hyperparameter optimization |
| Evidently AI | Data and model drift monitoring |
| DeepEval | LLM evaluation |

## 11. Deployment & API

| Tool | Description |
|---|---|
| FastAPI | Expose AI models through REST APIs |
| BentoML | Model serving |
| Ray Serve | Distributed model serving |
| ONNX Runtime | Cross-platform model inference |
| Gradio | AI demo interfaces |
| Streamlit | Data and AI dashboards |

## 12. MLOps & Data Pipeline

| Tool | Description |
|---|---|
| Apache Airflow | Schedule data and ML pipelines |
| Prefect | Workflow orchestration |
| Dagster | Data orchestration |
| Kubeflow | Kubernetes-based ML workflows |
| DVC | Data and model versioning |
| Feast | Feature store |

## 13. Specialized AI Libraries

### Speech-to-Text
- Whisper
- faster-whisper
- SpeechBrain

### Text-to-Speech
- Coqui TTS
- Kokoro
- Piper

### OCR
- EasyOCR
- PaddleOCR
- docTR

### Reinforcement Learning
- Gymnasium
- Stable-Baselines3
- Ray RLlib

### Recommendation Systems
- RecBole
- LightFM
- implicit

### Anomaly Detection
- PyOD
- Isolation Forest

### Synthetic Data
- SDV
- Faker
- Gretel

### AutoML
- AutoGluon
- FLAML
- H2O AutoML

---

# Recommended Learning Roadmap

1. **Data Foundation:** NumPy → Pandas → Polars → Matplotlib
2. **Machine Learning:** Scikit-learn → XGBoost → Optuna
3. **Deep Learning:** PyTorch → Torchvision
4. **Modern AI:** Hugging Face → Transformers → PEFT
5. **AI Applications:** Embeddings → Qdrant → RAG → LangGraph
6. **Production:** FastAPI → MLflow → Docker

# Practical AI Stack

| Task | Recommended Tools |
|---|---|
| Text classification | Scikit-learn / Transformers |
| Semantic search | Sentence Transformers |
| Sentiment analysis | Transformers |
| Named Entity Recognition | spaCy |
| Local LLM | Ollama / llama.cpp |
| Agent workflows | LangGraph |
| Vector search | Qdrant |
| API development | FastAPI |
| Model evaluation | MLflow / DeepEval |

# Important Concepts

- **Training:** Teaching a model using datasets.
- **Fine-tuning:** Adapting a pretrained model to a specific task.
- **Inference:** Running a trained model to generate predictions.
- **Embedding:** Converting data into numerical vector representations.
- **RAG:** Combining retrieval with LLM generation.
- **Orchestration:** Connecting models, tools and workflows.
- **MLOps:** Managing the lifecycle of ML models in production.

> Not every AI application requires model training. Most practical AI systems combine pretrained models, inference, classification, retrieval and orchestration.