__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10,
                  "end": 11
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 7,
                "end": 11
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 13
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 16,
            "end": 18
          },
          "definite": false,
          "start": 6,
          "end": 18
        }
      ],
      "declare": false,
      "start": 0,
      "end": 19
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 31
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 27,
                "end": 31
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 33
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 36,
            "end": 38
          },
          "definite": false,
          "start": 26,
          "end": 38
        }
      ],
      "declare": false,
      "start": 20,
      "end": 39
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 45
          },
          "init": null,
          "definite": false,
          "start": 44,
          "end": 45
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "init": null,
          "definite": false,
          "start": 47,
          "end": 48
        }
      ],
      "declare": false,
      "start": 40,
      "end": 49
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 56
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 52,
              "end": 56
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 51,
          "end": 58
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 61,
          "end": 63
        },
        "start": 51,
        "end": 63
      },
      "directive": null,
      "start": 50,
      "end": 65
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 72
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 68,
              "end": 72
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 74
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 77,
          "end": 79
        },
        "start": 67,
        "end": 79
      },
      "directive": null,
      "start": 66,
      "end": 81
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 123,
                "end": 124
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 126
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 130,
              "end": 133
            },
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 134,
              "end": 136
            },
            "start": 129,
            "end": 136
          },
          "definite": false,
          "start": 122,
          "end": 136
        }
      ],
      "declare": false,
      "start": 116,
      "end": 137
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 146
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 146
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 145,
                "end": 146
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 148
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 152,
              "end": 155
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 156,
              "end": 158
            },
            "start": 151,
            "end": 158
          },
          "definite": false,
          "start": 144,
          "end": 158
        }
      ],
      "declare": false,
      "start": 138,
      "end": 159
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 165
          },
          "init": null,
          "definite": false,
          "start": 164,
          "end": 165
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 168
          },
          "init": null,
          "definite": false,
          "start": 167,
          "end": 168
        }
      ],
      "declare": false,
      "start": 160,
      "end": 169
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 173
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 171,
          "end": 175
        },
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 179,
            "end": 182
          },
          "expression": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 183,
            "end": 185
          },
          "start": 178,
          "end": 185
        },
        "start": 171,
        "end": 185
      },
      "directive": null,
      "start": 170,
      "end": 187
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "h",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 191
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "h",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 191
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 190,
              "end": 191
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 189,
          "end": 193
        },
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 197,
            "end": 200
          },
          "expression": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 201,
            "end": 203
          },
          "start": 196,
          "end": 203
        },
        "start": 189,
        "end": 203
      },
      "directive": null,
      "start": 188,
      "end": 205
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 205
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 7,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": "]",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 18,
    "end": 19
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 20,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 27,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 40,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 52,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
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
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 68,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 116,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 130,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 138,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 152,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 160,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "h",
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
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 179,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 197,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  }
]
```
