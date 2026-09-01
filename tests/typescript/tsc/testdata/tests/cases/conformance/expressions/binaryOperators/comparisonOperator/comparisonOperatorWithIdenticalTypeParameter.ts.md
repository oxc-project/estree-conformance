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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
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
              "start": 13,
              "end": 14
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 14
          }
        ],
        "start": 12,
        "end": 15
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 20
              },
              "typeArguments": null,
              "start": 19,
              "end": 20
            },
            "start": 17,
            "end": 20
          },
          "start": 16,
          "end": 20
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 32,
                  "end": 34
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 37,
                    "end": 38
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 41,
                    "end": 42
                  },
                  "start": 37,
                  "end": 42
                },
                "definite": false,
                "start": 32,
                "end": 42
              }
            ],
            "declare": false,
            "start": 28,
            "end": 43
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 54
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 57,
                    "end": 58
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 61,
                    "end": 62
                  },
                  "start": 57,
                  "end": 62
                },
                "definite": false,
                "start": 52,
                "end": 62
              }
            ],
            "declare": false,
            "start": 48,
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 74
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 77,
                    "end": 78
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 82,
                    "end": 83
                  },
                  "start": 77,
                  "end": 83
                },
                "definite": false,
                "start": 72,
                "end": 83
              }
            ],
            "declare": false,
            "start": 68,
            "end": 84
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
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 95
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 98,
                    "end": 99
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 103,
                    "end": 104
                  },
                  "start": 98,
                  "end": 104
                },
                "definite": false,
                "start": 93,
                "end": 104
              }
            ],
            "declare": false,
            "start": 89,
            "end": 105
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
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 116
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 119,
                    "end": 120
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 124,
                    "end": 125
                  },
                  "start": 119,
                  "end": 125
                },
                "definite": false,
                "start": 114,
                "end": 125
              }
            ],
            "declare": false,
            "start": 110,
            "end": 126
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
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 135,
                  "end": 137
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 141
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 145,
                    "end": 146
                  },
                  "start": 140,
                  "end": 146
                },
                "definite": false,
                "start": 135,
                "end": 146
              }
            ],
            "declare": false,
            "start": 131,
            "end": 147
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
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 158
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 161,
                    "end": 162
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 167,
                    "end": 168
                  },
                  "start": 161,
                  "end": 168
                },
                "definite": false,
                "start": 156,
                "end": 168
              }
            ],
            "declare": false,
            "start": 152,
            "end": 169
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
                  "name": "r8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 180
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 184
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 189,
                    "end": 190
                  },
                  "start": 183,
                  "end": 190
                },
                "definite": false,
                "start": 178,
                "end": 190
              }
            ],
            "declare": false,
            "start": 174,
            "end": 191
          }
        ],
        "start": 22,
        "end": 193
      },
      "expression": false,
      "start": 0,
      "end": 193
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 193
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 28,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 32,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 48,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 52,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 68,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 72,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 79,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 89,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 93,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 100,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 110,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 114,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 121,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 131,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 135,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 142,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 152,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 156,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 163,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 174,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 178,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 185,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193
  }
]
```
