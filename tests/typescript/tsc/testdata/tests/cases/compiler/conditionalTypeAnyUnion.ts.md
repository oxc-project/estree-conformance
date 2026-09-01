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
        "name": "Spec",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 31
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSAnyKeyword",
          "start": 34,
          "end": 37
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 46,
          "end": 52
        },
        "trueType": {
          "type": "TSAnyKeyword",
          "start": 55,
          "end": 58
        },
        "falseType": {
          "type": "TSStringKeyword",
          "start": 61,
          "end": 67
        },
        "start": 34,
        "end": 67
      },
      "declare": false,
      "start": 22,
      "end": 68
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithSpec",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 83
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
              "start": 84,
              "end": 85
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 94,
              "end": 100
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 84,
            "end": 100
          }
        ],
        "start": 83,
        "end": 101
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 104,
          "end": 105
        },
        "typeArguments": null,
        "start": 104,
        "end": 105
      },
      "declare": false,
      "start": 70,
      "end": 105
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 113
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "WithSpec",
          "optional": false,
          "typeAnnotation": null,
          "start": 116,
          "end": 124
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Spec",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 129
              },
              "typeArguments": null,
              "start": 125,
              "end": 129
            }
          ],
          "start": 124,
          "end": 130
        },
        "start": 116,
        "end": 130
      },
      "declare": false,
      "start": 107,
      "end": 130
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 150
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 22,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Spec",
    "start": 27,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 34,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 38,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 55,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 61,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 70,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "WithSpec",
    "start": 75,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 86,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 107,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "WithSpec",
    "start": 116,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "Spec",
    "start": 125,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 129,
    "end": 130
  }
]
```
