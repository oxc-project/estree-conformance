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
        "name": "H_inline1",
        "optional": false,
        "typeAnnotation": null,
        "start": 20,
        "end": 29
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 31
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 30,
            "end": 31
          }
        ],
        "start": 29,
        "end": 32
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSFunctionType",
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "params": [
              {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 38
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 47,
                    "end": 48
                  },
                  "typeArguments": null,
                  "start": 47,
                  "end": 48
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 37,
                "end": 48
              }
            ],
            "start": 36,
            "end": 49
          },
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 56
              },
              "typeArguments": null,
              "start": 55,
              "end": 56
            },
            "start": 52,
            "end": 56
          },
          "start": 36,
          "end": 56
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 80
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 79,
                "end": 80
              },
              "start": 73,
              "end": 80
            },
            "start": 70,
            "end": 80
          },
          "start": 67,
          "end": 80
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 85
          },
          "typeArguments": null,
          "start": 84,
          "end": 85
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 88,
          "end": 93
        },
        "start": 35,
        "end": 93
      },
      "declare": false,
      "start": 15,
      "end": 94
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 107
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "H_inline1",
          "optional": false,
          "typeAnnotation": null,
          "start": 110,
          "end": 119
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 120,
              "end": 126
            }
          ],
          "start": 119,
          "end": 127
        },
        "start": 110,
        "end": 127
      },
      "declare": false,
      "start": 96,
      "end": 128
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 15,
  "end": 150
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 15,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "H_inline1",
    "start": 20,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 39,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 52,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 70,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 73,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 88,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 96,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 101,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "H_inline1",
    "start": 110,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 120,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  }
]
```
