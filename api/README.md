# Chexplained API

Basic FastAPI backend setup.

## Setup

```sh
cd api
python3 -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
```

## Run

```sh
uvicorn app.main:app --reload
```

The API is available at `http://127.0.0.1:8000`.
