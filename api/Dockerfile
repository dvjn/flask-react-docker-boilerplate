FROM python:3.8-slim-buster

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE 1

COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY . ./

EXPOSE 5000
CMD ["python", "app.py"]