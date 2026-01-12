__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 15,
                  "end": 20
                },
                "start": 15,
                "end": 20
              },
              "start": 13,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 21
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 37,
                      "end": 42
                    },
                    "start": 37,
                    "end": 42
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 45,
                      "end": 50
                    },
                    "start": 45,
                    "end": 50
                  }
                ],
                "start": 37,
                "end": 50
              },
              "start": 35,
              "end": 50
            },
            "start": 34,
            "end": 50
          },
          "init": null,
          "definite": false,
          "start": 34,
          "end": 50
        }
      ],
      "declare": true,
      "start": 22,
      "end": 51
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 60,
                "end": 67
              },
              "start": 58,
              "end": 67
            },
            "start": 57,
            "end": 67
          },
          "init": null,
          "definite": false,
          "start": 57,
          "end": 67
        }
      ],
      "declare": false,
      "start": 53,
      "end": 68
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 70
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 74
          },
          "operator": "==",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 79
          },
          "start": 73,
          "end": 79
        },
        "start": 69,
        "end": 79
      },
      "directive": null,
      "start": 69,
      "end": 80
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 81,
          "end": 82
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 85,
            "end": 90
          },
          "operator": "==",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 95
          },
          "start": 85,
          "end": 95
        },
        "start": 81,
        "end": 95
      },
      "directive": null,
      "start": 81,
      "end": 95
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 96,
          "end": 97
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 101
          },
          "operator": "==",
          "right": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 105,
            "end": 110
          },
          "start": 100,
          "end": 110
        },
        "start": 96,
        "end": 110
      },
      "directive": null,
      "start": 96,
      "end": 111
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 112,
          "end": 113
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 116,
            "end": 121
          },
          "operator": "==",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 125,
            "end": 130
          },
          "start": 116,
          "end": 130
        },
        "start": 112,
        "end": 130
      },
      "directive": null,
      "start": 112,
      "end": 131
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 133,
          "end": 134
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 138
          },
          "operator": "!=",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 143
          },
          "start": 137,
          "end": 143
        },
        "start": 133,
        "end": 143
      },
      "directive": null,
      "start": 133,
      "end": 144
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 145,
          "end": 146
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 149,
            "end": 154
          },
          "operator": "!=",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 159
          },
          "start": 149,
          "end": 159
        },
        "start": 145,
        "end": 159
      },
      "directive": null,
      "start": 145,
      "end": 159
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 160,
          "end": 161
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 165
          },
          "operator": "!=",
          "right": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 169,
            "end": 174
          },
          "start": 164,
          "end": 174
        },
        "start": 160,
        "end": 174
      },
      "directive": null,
      "start": 160,
      "end": 175
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 176,
          "end": 177
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 180,
            "end": 185
          },
          "operator": "!=",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 189,
            "end": 194
          },
          "start": 180,
          "end": 194
        },
        "start": 176,
        "end": 194
      },
      "directive": null,
      "start": 176,
      "end": 195
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 196
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
    "value": "let",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 15,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 22,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 30,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 37,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 43,
    "end": 44
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 45,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 53,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 60,
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
    "value": "b",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 75,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "String",
    "value": "\"foo\"",
    "start": 85,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 91,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 102,
    "end": 104
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 105,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "String",
    "value": "\"foo\"",
    "start": 116,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 122,
    "end": 124
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 125,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 133,
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
    "value": "x",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 139,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 147,
    "end": 148
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 149,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 155,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 166,
    "end": 168
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 169,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 180,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 186,
    "end": 188
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 189,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  }
]
```
