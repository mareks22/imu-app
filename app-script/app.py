import robothub_depthai
import robothub

def callback(packet):
    for imu_data in packet.data:
        timestamp = imu_data.gyroscope.getTimestampDevice()
        timestamp_ms = int(timestamp.total_seconds()*1000)
        robothub.COMMUNICATOR.notify(
            key='rhSchema/number',
            payload={'id': 'gyroscope-xyz', 'value': {'x': imu_data.gyroscope.x, 'y': imu_data.gyroscope.y, 'z': imu_data.gyroscope.z, 'timestamp' : timestamp_ms}}
        )

class ExampleApplication(robothub_depthai.RobotHubApplication):

    def on_start(self):
        for camera in self.unbooted_cameras:
            print('oakCamera start')
            imu = camera.oak_camera.create_imu()
            imu.config_imu(report_rate=60, batch_report_threshold=1, max_batch_reports=5)
            
            camera.oak_camera.callback(imu.out.main, callback=callback)
