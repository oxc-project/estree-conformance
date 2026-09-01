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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 7,
                  "end": 9
                },
                "start": 7,
                "end": 9
              },
              "start": 5,
              "end": 9
            },
            "start": 4,
            "end": 9
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 9
        }
      ],
      "declare": false,
      "start": 0,
      "end": 10
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 18,
                  "end": 23
                },
                "start": 18,
                "end": 23
              },
              "start": 16,
              "end": 23
            },
            "start": 15,
            "end": 23
          },
          "init": null,
          "definite": false,
          "start": 15,
          "end": 23
        }
      ],
      "declare": false,
      "start": 11,
      "end": 24
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "\"bar\"",
                  "start": 32,
                  "end": 37
                },
                "start": 32,
                "end": 37
              },
              "start": 30,
              "end": 37
            },
            "start": 29,
            "end": 37
          },
          "init": null,
          "definite": false,
          "start": 29,
          "end": 37
        }
      ],
      "declare": false,
      "start": 25,
      "end": 38
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "baz",
                  "raw": "\"baz\"",
                  "start": 48,
                  "end": 53
                },
                "start": 48,
                "end": 53
              },
              "start": 46,
              "end": 53
            },
            "start": 45,
            "end": 53
          },
          "init": null,
          "definite": false,
          "start": 45,
          "end": 53
        }
      ],
      "declare": false,
      "start": 39,
      "end": 54
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 56,
          "end": 57
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 60,
          "end": 62
        },
        "start": 56,
        "end": 62
      },
      "directive": null,
      "start": 56,
      "end": 63
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
          "start": 64,
          "end": 65
        },
        "right": {
          "type": "Literal",
          "value": "foo",
          "raw": "\"foo\"",
          "start": 68,
          "end": 73
        },
        "start": 64,
        "end": 73
      },
      "directive": null,
      "start": 64,
      "end": 74
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 75,
          "end": 76
        },
        "right": {
          "type": "Literal",
          "value": "bar",
          "raw": "\"bar\"",
          "start": 79,
          "end": 84
        },
        "start": 75,
        "end": 84
      },
      "directive": null,
      "start": 75,
      "end": 85
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
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 94,
                  "end": 96
                },
                "start": 94,
                "end": 96
              },
              "start": 92,
              "end": 96
            },
            "start": 91,
            "end": 96
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 99,
            "end": 101
          },
          "definite": false,
          "start": 91,
          "end": 101
        }
      ],
      "declare": false,
      "start": 87,
      "end": 102
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 110,
                  "end": 115
                },
                "start": 110,
                "end": 115
              },
              "start": 108,
              "end": 115
            },
            "start": 107,
            "end": 115
          },
          "init": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 118,
            "end": 123
          },
          "definite": false,
          "start": 107,
          "end": 123
        }
      ],
      "declare": false,
      "start": 103,
      "end": 124
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "\"bar\"",
                  "start": 132,
                  "end": 137
                },
                "start": 132,
                "end": 137
              },
              "start": 130,
              "end": 137
            },
            "start": 129,
            "end": 137
          },
          "init": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 140,
            "end": 145
          },
          "definite": false,
          "start": 129,
          "end": 145
        }
      ],
      "declare": false,
      "start": 125,
      "end": 146
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "baz",
                  "raw": "\"baz\"",
                  "start": 156,
                  "end": 161
                },
                "start": 156,
                "end": 161
              },
              "start": 154,
              "end": 161
            },
            "start": 153,
            "end": 161
          },
          "init": {
            "type": "Literal",
            "value": "baz",
            "raw": "\"baz\"",
            "start": 164,
            "end": 169
          },
          "definite": false,
          "start": 153,
          "end": 169
        }
      ],
      "declare": false,
      "start": 147,
      "end": 170
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 172,
          "end": 173
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 176,
          "end": 178
        },
        "start": 172,
        "end": 178
      },
      "directive": null,
      "start": 172,
      "end": 179
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 180,
          "end": 181
        },
        "right": {
          "type": "Literal",
          "value": "foo",
          "raw": "\"foo\"",
          "start": 184,
          "end": 189
        },
        "start": 180,
        "end": 189
      },
      "directive": null,
      "start": 180,
      "end": 190
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 191,
          "end": 192
        },
        "right": {
          "type": "Literal",
          "value": "bar",
          "raw": "\"bar\"",
          "start": 195,
          "end": 200
        },
        "start": 191,
        "end": 200
      },
      "directive": null,
      "start": 191,
      "end": 201
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 201
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5,
    "end": 6
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 7,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 11,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 18,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 25,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 32,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 39,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "d",
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
    "type": "String",
    "value": "\"baz\"",
    "start": 48,
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
    "value": "a",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 58,
    "end": 59
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 60,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 68,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 77,
    "end": 78
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 79,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 87,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 94,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 97,
    "end": 98
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 99,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 103,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 110,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 116,
    "end": 117
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 118,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 125,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 132,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 140,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 147,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 156,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 164,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 174,
    "end": 175
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 176,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 182,
    "end": 183
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 184,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 195,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  }
]
```
