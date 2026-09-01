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
        "start": 26,
        "end": 27
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 37
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 38,
        "end": 40
      },
      "abstract": true,
      "declare": false,
      "start": 11,
      "end": 40
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NewA",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 55
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Factory",
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
                "start": 72,
                "end": 73
              },
              "typeArguments": null,
              "start": 65,
              "end": 73
            },
            "start": 63,
            "end": 73
          },
          "start": 56,
          "end": 73
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 92,
                "end": 93
              },
              "typeArguments": null,
              "arguments": [],
              "start": 88,
              "end": 93
            },
            "start": 81,
            "end": 94
          }
        ],
        "start": 75,
        "end": 96
      },
      "expression": false,
      "start": 42,
      "end": 96
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NewB",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 111
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Factory",
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
                "start": 128,
                "end": 129
              },
              "typeArguments": null,
              "start": 121,
              "end": 129
            },
            "start": 119,
            "end": 129
          },
          "start": 112,
          "end": 129
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 149
              },
              "typeArguments": null,
              "arguments": [],
              "start": 144,
              "end": 149
            },
            "start": 137,
            "end": 150
          }
        ],
        "start": 131,
        "end": 152
      },
      "expression": false,
      "start": 98,
      "end": 152
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "NewA",
          "optional": false,
          "typeAnnotation": null,
          "start": 154,
          "end": 158
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 160
          }
        ],
        "optional": false,
        "start": 154,
        "end": 161
      },
      "directive": null,
      "start": 154,
      "end": 162
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "NewA",
          "optional": false,
          "typeAnnotation": null,
          "start": 163,
          "end": 167
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 169
          }
        ],
        "optional": false,
        "start": 163,
        "end": 170
      },
      "directive": null,
      "start": 163,
      "end": 171
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "NewB",
          "optional": false,
          "typeAnnotation": null,
          "start": 173,
          "end": 177
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 178,
            "end": 179
          }
        ],
        "optional": false,
        "start": 173,
        "end": 180
      },
      "directive": null,
      "start": 173,
      "end": 181
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "NewB",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 186
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 188
          }
        ],
        "optional": false,
        "start": 182,
        "end": 189
      },
      "directive": null,
      "start": 182,
      "end": 190
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 190
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
    "start": 11,
    "end": 19
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 20,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 28,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 42,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "NewA",
    "start": 51,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Factory",
    "start": 56,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 65,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 81,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 88,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 98,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "NewB",
    "start": 107,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "Factory",
    "start": 112,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 121,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 137,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 144,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "NewA",
    "start": 154,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "NewA",
    "start": 163,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "NewB",
    "start": 173,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "NewB",
    "start": 182,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  }
]
```
