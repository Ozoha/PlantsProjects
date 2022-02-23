FROM centos:latest

ADD bcl2fastq2-v2.20.0.422-Linux-x86_64.rpm /tmp/bcl2fastq.rpm
RUN sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-Linux-*
RUN sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-Linux-*
#    wget 'http://mirror.centos.org/centos/8-stream/BaseOS/x86_64/os/Packages/centos-gpg-keys-8-3.el8.noarch.rpm'
#sudo rpm -i 'centos-gpg-keys-8-3.el8.noarch.rpm'
RUN set -e \
      && dnf -y upgrade \
      && dnf -y --disablerepo '*' --enablerepo=extras swap centos-linux-repos centos-stream-repos \
      && dnf -y distro-sync \
      && dnf -y install /tmp/bcl2fastq.rpm \
      && dnf -y autoremove \
      && dnf clean all \
      && rm -rf /var/cache/dnf /tmp/bcl2fastq.rpmc

ENTRYPOINT ["/usr/local/bin/bcl2fastq"]