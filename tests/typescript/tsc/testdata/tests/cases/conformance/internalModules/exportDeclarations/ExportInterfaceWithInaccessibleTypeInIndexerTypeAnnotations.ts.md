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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 34
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 45,
                    "end": 46
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 48,
                      "end": 54
                    },
                    "start": 46,
                    "end": 54
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 45,
                  "end": 55
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 65
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 67,
                      "end": 73
                    },
                    "start": 65,
                    "end": 73
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 64,
                  "end": 74
                }
              ],
              "start": 35,
              "end": 80
            },
            "declare": false,
            "start": 19,
            "end": 80
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "points",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 109
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "idx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 127,
                            "end": 133
                          },
                          "start": 125,
                          "end": 133
                        },
                        "start": 122,
                        "end": 133
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 136,
                          "end": 141
                        },
                        "typeArguments": null,
                        "start": 136,
                        "end": 141
                      },
                      "start": 134,
                      "end": 141
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 121,
                    "end": 142
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "idx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 157,
                            "end": 163
                          },
                          "start": 155,
                          "end": 163
                        },
                        "start": 152,
                        "end": 163
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 166,
                          "end": 171
                        },
                        "typeArguments": null,
                        "start": 166,
                        "end": 171
                      },
                      "start": 164,
                      "end": 171
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 151,
                    "end": 172
                  }
                ],
                "start": 110,
                "end": 178
              },
              "declare": false,
              "start": 93,
              "end": 178
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 86,
            "end": 178
          }
        ],
        "start": 12,
        "end": 180
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 180
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 181
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
    "value": "A",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 19,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 29,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 86,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 93,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "points",
    "start": 103,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 122,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 136,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 152,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 157,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 166,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180
  }
]
```
