__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 8,
        "end": 10
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 10
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 28
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 38
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 39,
        "end": 41
      },
      "abstract": true,
      "declare": false,
      "start": 12,
      "end": 41
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 50
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 60
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 61,
        "end": 63
      },
      "abstract": false,
      "declare": false,
      "start": 43,
      "end": 63
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
            "name": "AA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 81,
                  "end": 82
                },
                "typeArguments": null,
                "start": 74,
                "end": 82
              },
              "start": 72,
              "end": 82
            },
            "start": 69,
            "end": 82
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 86
          },
          "definite": false,
          "start": 69,
          "end": 86
        }
      ],
      "declare": false,
      "start": 65,
      "end": 87
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
            "name": "BB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 105
                },
                "typeArguments": null,
                "start": 97,
                "end": 105
              },
              "start": 95,
              "end": 105
            },
            "start": 92,
            "end": 105
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 109
          },
          "definite": false,
          "start": 92,
          "end": 109
        }
      ],
      "declare": false,
      "start": 88,
      "end": 110
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
            "name": "CC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 128
                },
                "typeArguments": null,
                "start": 120,
                "end": 128
              },
              "start": 118,
              "end": 128
            },
            "start": 115,
            "end": 128
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 132
          },
          "definite": false,
          "start": 115,
          "end": 132
        }
      ],
      "declare": false,
      "start": 111,
      "end": 133
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "AA",
          "optional": false,
          "typeAnnotation": null,
          "start": 139,
          "end": 141
        },
        "typeArguments": null,
        "arguments": [],
        "start": 135,
        "end": 141
      },
      "directive": null,
      "start": 135,
      "end": 142
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "BB",
          "optional": false,
          "typeAnnotation": null,
          "start": 147,
          "end": 149
        },
        "typeArguments": null,
        "arguments": [],
        "start": 143,
        "end": 149
      },
      "directive": null,
      "start": 143,
      "end": 150
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "CC",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 157
        },
        "typeArguments": null,
        "arguments": [],
        "start": 151,
        "end": 157
      },
      "directive": null,
      "start": 151,
      "end": 158
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 158
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 12,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 21,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 29,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 43,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 51,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 65,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 69,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 74,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 88,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 92,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 97,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 111,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "CC",
    "start": 115,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 120,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 135,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 139,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 143,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 151,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "CC",
    "start": 155,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  }
]
```
