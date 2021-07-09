variable "PDTOKEN" {
  type = string
}

terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 2.13.0"
    }
    pagerduty = {
      source = "pagerduty/pagerduty"
    }
  }
}

provider "docker" {}

provider "pagerduty" {
    token = var.PDTOKEN
}

resource "docker_image" "nginx" {
  name         = "nginx:latest"
  keep_locally = false
}

resource "docker_container" "nginx" {
  image = docker_image.nginx.latest
  name  = "tutorial"
  ports {
    internal = 80
    external = 8000
  }
}