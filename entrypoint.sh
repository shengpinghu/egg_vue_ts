#!/usr/bin/env sh
# $0 is a script name,
# $1, $2, $3 etc are passed arguments
# $1 is our command
CMD=$1

case "$CMD" in
  "dev" )
    exec npm run dev
    ;;

  "staging" )
    # we can modify files here, using ENV variables passed in
    # "docker create" command. It can't be done during build process.

    exec npm run staging
    ;;

    "prod" )
    exec npm run production
    ;;
   * )
    # Run custom command. Thanks to this line we can still use
    # "docker run our_image /bin/bash" and it will work
    exec $CMD ${@:2}
    ;;
esac
