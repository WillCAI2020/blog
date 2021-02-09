FROM archlinux


RUN pacman -Syu --noconfirm nodejs npm git openssh

RUN pacman-db-upgrade

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]