from fastapi import FastAPI

app = FastAPI(title="Chexplained API")


@app.get("/")
def read_root() -> dict[str, str]:
    return {"message": "Chexplained API is running"}


@app.get("/health")
def read_health() -> dict[str, str]:
    return {"status": "ok"}
