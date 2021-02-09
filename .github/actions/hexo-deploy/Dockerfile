FROM archlinux

RUN apt-get update
RUN apt-get install sudo

RUN sudo pacman-db-upgrade

RUN pacman -S --noconfirm nodejs npm git openssh

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]