FROM python:alpine

COPY requirements.txt /opt/app/requirements.txt
WORKDIR /opt/app
RUN pip install -r requirements.txt
COPY . /opt/app

EXPOSE 8000
CMD ["mkdocs", "serve"]
