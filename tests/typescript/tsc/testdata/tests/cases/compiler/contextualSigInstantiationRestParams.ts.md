__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "toInstantiate",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 30
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 32
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 31,
            "end": 32
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 34,
            "end": 35
          }
        ],
        "start": 30,
        "end": 36
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 42
              },
              "typeArguments": null,
              "start": 41,
              "end": 42
            },
            "start": 39,
            "end": 42
          },
          "start": 37,
          "end": 42
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 49
              },
              "typeArguments": null,
              "start": 48,
              "end": 49
            },
            "start": 46,
            "end": 49
          },
          "start": 44,
          "end": 49
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 53
          },
          "typeArguments": null,
          "start": 52,
          "end": 53
        },
        "start": 50,
        "end": 53
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 54
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "contextual",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 82
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 87
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 89,
                "end": 95
              },
              "start": 89,
              "end": 97
            },
            "start": 87,
            "end": 97
          },
          "value": null,
          "start": 83,
          "end": 97
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 100,
          "end": 106
        },
        "start": 98,
        "end": 106
      },
      "body": null,
      "expression": false,
      "start": 55,
      "end": 106
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
            "name": "sig",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "contextual",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 124,
                  "end": 134
                },
                "typeArguments": null,
                "start": 117,
                "end": 134
              },
              "start": 115,
              "end": 134
            },
            "start": 112,
            "end": 134
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "toInstantiate",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 150
          },
          "definite": false,
          "start": 112,
          "end": 150
        }
      ],
      "declare": false,
      "start": 108,
      "end": 151
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 151
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
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "toInstantiate",
    "start": 17,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "B",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 55,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 63,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "contextual",
    "start": 72,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 83,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 100,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 108,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "sig",
    "start": 112,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 117,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "contextual",
    "start": 124,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "toInstantiate",
    "start": 137,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  }
]
```
