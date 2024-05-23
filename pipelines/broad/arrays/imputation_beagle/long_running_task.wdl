version 1.0

# Kick off a long running task to play with SSHing into batch VMs
workflow LongRunningTask {
  input {
    Int n_minutes = 10
  }

  call sleepForNMinutes {
    input:
      n_minutes_to_sleep = n_minutes
  }
}

task sleepForNMinutes {
  input {
    Int n_minutes_to_sleep
    String ubuntu_docker = "ubuntu:20.04"
  }

  Int n_seconds_to_sleep = 60 * n_minutes_to_sleep

  command {
    echo "sleeping for ~{n_minutes_to_sleep} minutes"
    sleep ~{n_seconds_to_sleep}
  }

  runtime {
    docker: ubuntu_docker
    disks: "local-disk 100 HDD"
    memory: "500 MiB"
    cpu: 1
  }
}
