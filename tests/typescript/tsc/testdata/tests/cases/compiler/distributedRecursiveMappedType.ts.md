__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Exact",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Shape",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 11,
            "end": 16
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Input",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 23
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 37
              },
              "typeArguments": null,
              "start": 32,
              "end": 37
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 18,
            "end": 37
          }
        ],
        "start": 10,
        "end": 38
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 46
          },
          "typeArguments": null,
          "start": 41,
          "end": 46
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 60
          },
          "typeArguments": null,
          "start": 55,
          "end": 60
        },
        "trueType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "Key",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 73
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 88
              },
              "typeArguments": null,
              "start": 83,
              "end": 88
            },
            "start": 77,
            "end": 88
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Exact",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 96
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Shape",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 97,
                      "end": 102
                    },
                    "typeArguments": null,
                    "start": 97,
                    "end": 102
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 103,
                      "end": 106
                    },
                    "typeArguments": null,
                    "start": 103,
                    "end": 106
                  },
                  "start": 97,
                  "end": 107
                },
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Input",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 109,
                      "end": 114
                    },
                    "typeArguments": null,
                    "start": 109,
                    "end": 114
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 115,
                      "end": 118
                    },
                    "typeArguments": null,
                    "start": 115,
                    "end": 118
                  },
                  "start": 109,
                  "end": 119
                }
              ],
              "start": 96,
              "end": 120
            },
            "start": 91,
            "end": 120
          },
          "optional": false,
          "readonly": null,
          "start": 67,
          "end": 122
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 129,
          "end": 134
        },
        "start": 41,
        "end": 134
      },
      "declare": false,
      "start": 0,
      "end": 135
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 135
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Exact",
    "start": 5,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 11,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 18,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 24,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 32,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 41,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 47,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 55,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 70,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 74,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 77,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 83,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "Exact",
    "start": 91,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 97,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 103,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 109,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 115,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 129,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  }
]
```
