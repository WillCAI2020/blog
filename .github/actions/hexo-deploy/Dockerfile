FROM archlinux

RUN pacman -Sy

RUN pacman -S sudo

RUN sudo pacman-db-upgrade

RUN pacman -S --noconfirm nodejs npm git openssh

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]