__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Validation",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i1",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 39
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 40,
              "end": 48
            },
            "declare": false,
            "start": 27,
            "end": 48
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "i2",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 73
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 74,
                "end": 82
              },
              "declare": false,
              "start": 61,
              "end": 82
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 54,
            "end": 82
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i3",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 100
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 111
                },
                "typeArguments": null,
                "start": 109,
                "end": 111
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 112,
              "end": 120
            },
            "declare": false,
            "start": 88,
            "end": 120
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 141
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 153,
                    "end": 155
                  },
                  "typeArguments": null,
                  "start": 153,
                  "end": 155
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 156,
                "end": 164
              },
              "abstract": false,
              "declare": false,
              "start": 133,
              "end": 164
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 126,
            "end": 164
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i4",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 182
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 183,
              "end": 191
            },
            "declare": false,
            "start": 170,
            "end": 191
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
                    "name": "c2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i4",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 211,
                          "end": 213
                        },
                        "typeArguments": null,
                        "start": 211,
                        "end": 213
                      },
                      "start": 210,
                      "end": 213
                    },
                    "start": 208,
                    "end": 213
                  },
                  "init": null,
                  "definite": false,
                  "start": 208,
                  "end": 213
                }
              ],
              "declare": false,
              "start": 204,
              "end": 214
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 197,
            "end": 214
          }
        ],
        "start": 21,
        "end": 216
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 216
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 216
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Validation",
    "start": 10,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 27,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 37,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 54,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 61,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 71,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 88,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 98,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 101,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 109,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 126,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 133,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 139,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 142,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 153,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 170,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "i4",
    "start": 180,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 197,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 204,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 208,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "i4",
    "start": 211,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216
  }
]
```
