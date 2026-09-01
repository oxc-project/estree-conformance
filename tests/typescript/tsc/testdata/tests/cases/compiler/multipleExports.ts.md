__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 18
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 36,
                      "end": 37
                    },
                    "init": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 40,
                      "end": 41
                    },
                    "definite": false,
                    "start": 36,
                    "end": 41
                  }
                ],
                "declare": false,
                "start": 32,
                "end": 42
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 25,
              "end": 42
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 58,
                      "end": 59
                    },
                    "init": null,
                    "definite": false,
                    "start": 58,
                    "end": 59
                  }
                ],
                "declare": false,
                "start": 54,
                "end": 60
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 47,
              "end": 60
            }
          ],
          "start": 19,
          "end": 62
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 62
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 62
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 71
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 74,
            "end": 75
          },
          "definite": false,
          "start": 70,
          "end": 75
        }
      ],
      "declare": false,
      "start": 64,
      "end": 76
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 94,
          "end": 95
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 103
              },
              "directive": null,
              "start": 102,
              "end": 104
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": null,
              "specifiers": [
                {
                  "type": "ExportSpecifier",
                  "local": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 117,
                    "end": 118
                  },
                  "exported": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 117,
                    "end": 118
                  },
                  "exportKind": "value",
                  "start": 117,
                  "end": 118
                }
              ],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 109,
              "end": 120
            }
          ],
          "start": 96,
          "end": 122
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 84,
        "end": 122
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 77,
      "end": 122
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 122
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 25,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 32,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 47,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 54,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 64,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 77,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 84,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 109,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  }
]
```
