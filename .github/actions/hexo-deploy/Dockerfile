FROM archlinux

RUN pacman -Syu --noconfirm nodejs npm git openssh

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]