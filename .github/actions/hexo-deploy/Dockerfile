FROM archlinux

RUN pacman -Syu --noconfirm git openssh
RUN curl https://raw.github.com/creationix/nvm/master/install.sh | sh

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]