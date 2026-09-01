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
        "name": "D3",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "D3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 34,
                            "end": 36
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Color",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 37,
                            "end": 42
                          },
                          "start": 34,
                          "end": 42
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Color",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 43,
                          "end": 48
                        },
                        "start": 34,
                        "end": 48
                      },
                      "typeArguments": null,
                      "start": 34,
                      "end": 48
                    },
                    "start": 32,
                    "end": 48
                  },
                  "start": 31,
                  "end": 48
                },
                "init": null,
                "definite": false,
                "start": 31,
                "end": 48
              }
            ],
            "declare": false,
            "start": 27,
            "end": 49
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Color",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 70
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Color",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 98,
                      "end": 103
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "darker",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 118,
                            "end": 124
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Color",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 126,
                                "end": 131
                              },
                              "typeArguments": null,
                              "start": 126,
                              "end": 131
                            },
                            "start": 124,
                            "end": 131
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 118,
                          "end": 132
                        }
                      ],
                      "start": 104,
                      "end": 142
                    },
                    "declare": false,
                    "start": 88,
                    "end": 142
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 81,
                  "end": 142
                }
              ],
              "start": 71,
              "end": 148
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 55,
            "end": 148
          }
        ],
        "start": 21,
        "end": 150
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 150
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 150
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
    "value": "namespace",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "D3",
    "start": 18,
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
    "value": "var",
    "start": 27,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "D3",
    "start": 34,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 37,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 43,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 55,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 65,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 81,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 88,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 98,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "darker",
    "start": 118,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 126,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  }
]
```
