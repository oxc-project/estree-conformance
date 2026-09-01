__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "shouldBeOk",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "__dunder",
                  "raw": "'__dunder'",
                  "start": 16,
                  "end": 26
                },
                "start": 16,
                "end": 26
              },
              "start": 14,
              "end": 26
            },
            "start": 4,
            "end": 26
          },
          "init": {
            "type": "Literal",
            "value": "__dunder",
            "raw": "'__dunder'",
            "start": 29,
            "end": 39
          },
          "definite": false,
          "start": 4,
          "end": 39
        }
      ],
      "declare": false,
      "start": 0,
      "end": 40
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
            "name": "bad",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "__dunder",
                  "raw": "'__dunder'",
                  "start": 50,
                  "end": 60
                },
                "start": 50,
                "end": 60
              },
              "start": 48,
              "end": 60
            },
            "start": 45,
            "end": 60
          },
          "init": {
            "type": "Literal",
            "value": "no_dunder",
            "raw": "'no_dunder'",
            "start": 63,
            "end": 74
          },
          "definite": false,
          "start": 45,
          "end": 74
        }
      ],
      "declare": false,
      "start": 41,
      "end": 75
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
            "name": "okok",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "___thunder",
                  "raw": "'___thunder'",
                  "start": 86,
                  "end": 98
                },
                "start": 86,
                "end": 98
              },
              "start": 84,
              "end": 98
            },
            "start": 80,
            "end": 98
          },
          "init": {
            "type": "Literal",
            "value": "___thunder",
            "raw": "'___thunder'",
            "start": 101,
            "end": 113
          },
          "definite": false,
          "start": 80,
          "end": 113
        }
      ],
      "declare": false,
      "start": 76,
      "end": 114
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
            "name": "alsoOk",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "_sunder",
                  "raw": "'_sunder'",
                  "start": 127,
                  "end": 136
                },
                "start": 127,
                "end": 136
              },
              "start": 125,
              "end": 136
            },
            "start": 119,
            "end": 136
          },
          "init": {
            "type": "Literal",
            "value": "_sunder",
            "raw": "'_sunder'",
            "start": 139,
            "end": 148
          },
          "definite": false,
          "start": 119,
          "end": 148
        }
      ],
      "declare": false,
      "start": 115,
      "end": 149
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 149
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "shouldBeOk",
    "start": 4,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14,
    "end": 15
  },
  {
    "type": "String",
    "value": "'__dunder'",
    "start": 16,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "String",
    "value": "'__dunder'",
    "start": 29,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 41,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "bad",
    "start": 45,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "String",
    "value": "'__dunder'",
    "start": 50,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
  },
  {
    "type": "String",
    "value": "'no_dunder'",
    "start": 63,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 76,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "okok",
    "start": 80,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "String",
    "value": "'___thunder'",
    "start": 86,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 99,
    "end": 100
  },
  {
    "type": "String",
    "value": "'___thunder'",
    "start": 101,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 115,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "alsoOk",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "String",
    "value": "'_sunder'",
    "start": 127,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138
  },
  {
    "type": "String",
    "value": "'_sunder'",
    "start": 139,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  }
]
```
