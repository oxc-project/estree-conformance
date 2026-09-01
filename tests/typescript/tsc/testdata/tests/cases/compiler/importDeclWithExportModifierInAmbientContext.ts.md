__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "m",
        "raw": "\"m\"",
        "start": 15,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 57,
                    "end": 58
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [],
                    "start": 59,
                    "end": 70
                  },
                  "declare": false,
                  "start": 47,
                  "end": 70
                }
              ],
              "start": 37,
              "end": 76
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 25,
            "end": 76
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 96
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 99,
                  "end": 100
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 102
                },
                "start": 99,
                "end": 102
              },
              "importKind": "value",
              "start": 88,
              "end": 103
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 81,
            "end": 103
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 115,
                        "end": 116
                      },
                      "typeArguments": null,
                      "start": 115,
                      "end": 116
                    },
                    "start": 113,
                    "end": 116
                  },
                  "start": 112,
                  "end": 116
                },
                "init": null,
                "definite": false,
                "start": 112,
                "end": 116
              }
            ],
            "declare": false,
            "start": 108,
            "end": 117
          }
        ],
        "start": 19,
        "end": 119
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 119
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 119
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 8,
    "end": 14
  },
  {
    "type": "String",
    "value": "\"m\"",
    "start": 15,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 25,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 47,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 81,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 88,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 108,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119
  }
]
```
