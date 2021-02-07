FROM archlinux

RUN pacman -Syu --noconfirm nodejs npm git openssh
RUN node -v
RUN npm i -g hexo-cli
RUN npm i

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]