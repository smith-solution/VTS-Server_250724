from fastapi import FastAPI

app = FastAPI()

@app.get("/ros/hello")
def ros_hello():
    return {"message": "Hello from ROS2 API!"}
