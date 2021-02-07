FROM archlinux

RUN pacman -Syu --noconfirm git openssh
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]