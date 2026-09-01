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
        "name": "Loop",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 11
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 10,
            "end": 11
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Loop",
                "optional": false,
                "typeAnnotation": null,
                "start": 23,
                "end": 27
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 28,
                      "end": 29
                    },
                    "typeArguments": null,
                    "start": 28,
                    "end": 29
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 31,
                      "end": 32
                    },
                    "typeArguments": null,
                    "start": 31,
                    "end": 32
                  }
                ],
                "start": 27,
                "end": 33
              },
              "start": 23,
              "end": 33
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 33
          }
        ],
        "start": 9,
        "end": 34
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 44,
          "end": 45
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 56
            },
            "typeArguments": null,
            "start": 55,
            "end": 56
          },
          "start": 49,
          "end": 56
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 60
              },
              "typeArguments": null,
              "start": 59,
              "end": 60
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 62
              },
              "typeArguments": null,
              "start": 61,
              "end": 62
            },
            "start": 59,
            "end": 63
          },
          "extendsType": {
            "type": "TSBooleanKeyword",
            "start": 72,
            "end": 79
          },
          "trueType": {
            "type": "TSNumberKeyword",
            "start": 82,
            "end": 88
          },
          "falseType": {
            "type": "TSStringKeyword",
            "start": 91,
            "end": 97
          },
          "start": 59,
          "end": 97
        },
        "optional": false,
        "readonly": null,
        "start": 37,
        "end": 100
      },
      "declare": false,
      "start": 0,
      "end": 101
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 101
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
    "value": "Loop",
    "start": 5,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 15,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "Loop",
    "start": 23,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "[",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 46,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 49,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 64,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 72,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 82,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  }
]
```
