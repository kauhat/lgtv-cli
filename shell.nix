{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs-16_x
    pkgs.yarn
    pkgs.yarn2nix

    # keep this line if you use bash
    # pkgs.bashInteractive
  ];
}
