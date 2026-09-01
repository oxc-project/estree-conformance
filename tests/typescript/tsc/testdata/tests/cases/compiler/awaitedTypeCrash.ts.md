__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 73
      },
      "generator": true,
      "async": true,
      "declare": false,
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
              "start": 74,
              "end": 75
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 91
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNeverKeyword",
                    "start": 92,
                    "end": 97
                  }
                ],
                "start": 91,
                "end": 98
              },
              "start": 84,
              "end": 98
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 74,
            "end": 98
          }
        ],
        "start": 73,
        "end": 99
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncGenerator",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 117
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
                  "start": 118,
                  "end": 119
                },
                "typeArguments": null,
                "start": 118,
                "end": 119
              },
              {
                "type": "TSVoidKeyword",
                "start": 121,
                "end": 125
              },
              {
                "type": "TSVoidKeyword",
                "start": 127,
                "end": 131
              }
            ],
            "start": 117,
            "end": 132
          },
          "start": 103,
          "end": 132
        },
        "start": 101,
        "end": 132
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 133,
        "end": 136
      },
      "expression": false,
      "start": 56,
      "end": 136
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 136
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "async",
    "start": 56,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 62,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 76,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 84,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 92,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "AsyncGenerator",
    "start": 103,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 121,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 127,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  }
]
```
