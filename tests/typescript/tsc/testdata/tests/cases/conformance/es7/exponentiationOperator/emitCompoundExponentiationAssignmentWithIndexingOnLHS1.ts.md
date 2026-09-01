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
            "name": "array0",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 10
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 14,
                "end": 15
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 17,
                "end": 18
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 20,
                "end": 21
              }
            ],
            "start": 13,
            "end": 22
          },
          "definite": false,
          "start": 4,
          "end": 22
        }
      ],
      "declare": false,
      "start": 0,
      "end": 22
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
            "name": "i0",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 29
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 32,
            "end": 33
          },
          "definite": false,
          "start": 27,
          "end": 33
        }
      ],
      "declare": false,
      "start": 23,
      "end": 34
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "array0",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 41
          },
          "property": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "i0",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 46
            },
            "start": 42,
            "end": 46
          },
          "optional": false,
          "computed": true,
          "start": 35,
          "end": 47
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 52,
          "end": 53
        },
        "start": 35,
        "end": 53
      },
      "directive": null,
      "start": 35,
      "end": 54
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
            "name": "array1",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 66
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 70,
                "end": 71
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 73,
                "end": 74
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 76,
                "end": 77
              }
            ],
            "start": 69,
            "end": 78
          },
          "definite": false,
          "start": 60,
          "end": 78
        }
      ],
      "declare": false,
      "start": 56,
      "end": 78
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
            "name": "i1",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 85
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 88,
            "end": 89
          },
          "definite": false,
          "start": 83,
          "end": 89
        }
      ],
      "declare": false,
      "start": 79,
      "end": 90
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "array1",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 97
          },
          "property": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "i1",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 102
            },
            "start": 98,
            "end": 102
          },
          "optional": false,
          "computed": true,
          "start": 91,
          "end": 103
        },
        "right": {
          "type": "AssignmentExpression",
          "operator": "**=",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "array1",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 114
            },
            "property": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 119
              },
              "start": 115,
              "end": 119
            },
            "optional": false,
            "computed": true,
            "start": 108,
            "end": 120
          },
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 125,
            "end": 126
          },
          "start": 108,
          "end": 126
        },
        "start": 91,
        "end": 126
      },
      "directive": null,
      "start": 91,
      "end": 127
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
            "name": "array2",
            "optional": false,
            "typeAnnotation": null,
            "start": 133,
            "end": 139
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 143,
                "end": 144
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 146,
                "end": 147
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 149,
                "end": 150
              }
            ],
            "start": 142,
            "end": 151
          },
          "definite": false,
          "start": 133,
          "end": 151
        }
      ],
      "declare": false,
      "start": 129,
      "end": 151
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
            "name": "i2",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 158
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 161,
            "end": 162
          },
          "definite": false,
          "start": 156,
          "end": 162
        }
      ],
      "declare": false,
      "start": 152,
      "end": 163
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "array2",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 170
          },
          "property": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 175
            },
            "start": 171,
            "end": 175
          },
          "optional": false,
          "computed": true,
          "start": 164,
          "end": 176
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "array2",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 187
            },
            "property": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i2",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 192
              },
              "start": 188,
              "end": 192
            },
            "optional": false,
            "computed": true,
            "start": 181,
            "end": 193
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 197,
            "end": 198
          },
          "start": 181,
          "end": 198
        },
        "start": 164,
        "end": 198
      },
      "directive": null,
      "start": 164,
      "end": 199
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
            "name": "array3",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 211
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 215,
                "end": 216
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 218,
                "end": 219
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 221,
                "end": 222
              }
            ],
            "start": 214,
            "end": 223
          },
          "definite": false,
          "start": 205,
          "end": 223
        }
      ],
      "declare": false,
      "start": 201,
      "end": 224
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
            "name": "j0",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 231
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 234,
            "end": 235
          },
          "definite": false,
          "start": 229,
          "end": 235
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "j1",
            "optional": false,
            "typeAnnotation": null,
            "start": 237,
            "end": 239
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 242,
            "end": 243
          },
          "definite": false,
          "start": 237,
          "end": 243
        }
      ],
      "declare": false,
      "start": 225,
      "end": 244
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "array3",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 251
          },
          "property": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "j0",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 254
            },
            "start": 252,
            "end": 256
          },
          "optional": false,
          "computed": true,
          "start": 245,
          "end": 257
        },
        "right": {
          "type": "AssignmentExpression",
          "operator": "**=",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "array3",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 268
            },
            "property": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "j1",
                "optional": false,
                "typeAnnotation": null,
                "start": 269,
                "end": 271
              },
              "start": 269,
              "end": 273
            },
            "optional": false,
            "computed": true,
            "start": 262,
            "end": 274
          },
          "right": {
            "type": "AssignmentExpression",
            "operator": "**=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "array3",
                "optional": false,
                "typeAnnotation": null,
                "start": 279,
                "end": 285
              },
              "property": {
                "type": "UpdateExpression",
                "operator": "++",
                "prefix": false,
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "j0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 286,
                  "end": 288
                },
                "start": 286,
                "end": 290
              },
              "optional": false,
              "computed": true,
              "start": 279,
              "end": 291
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 296,
              "end": 297
            },
            "start": 279,
            "end": 297
          },
          "start": 262,
          "end": 297
        },
        "start": 245,
        "end": 297
      },
      "directive": null,
      "start": 245,
      "end": 298
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 298
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
    "value": "array0",
    "start": 4,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 13,
    "end": 14
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 15,
    "end": 16
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 18,
    "end": 19
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 23,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "i0",
    "start": 27,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "array0",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 42,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "i0",
    "start": 44,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 48,
    "end": 51
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "type": "Keyword",
    "value": "var",
    "start": 56,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "array1",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 69,
    "end": 70
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 71,
    "end": 72
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 74,
    "end": 75
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 79,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 83,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "array1",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 98,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 100,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 104,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "array1",
    "start": 108,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 115,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 117,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 121,
    "end": 124
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 129,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "array2",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 142,
    "end": 143
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 144,
    "end": 145
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 147,
    "end": 148
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 152,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "i2",
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
    "type": "Numeric",
    "value": "0",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "array2",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 171,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 173,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 177,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "array2",
    "start": 181,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 188,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 190,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 194,
    "end": 196
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 201,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "array3",
    "start": 205,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 214,
    "end": 215
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 216,
    "end": 217
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 219,
    "end": 220
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 225,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "j0",
    "start": 229,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 232,
    "end": 233
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "j1",
    "start": 237,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 240,
    "end": 241
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "array3",
    "start": 245,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "j0",
    "start": 252,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 254,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 258,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "array3",
    "start": 262,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "j1",
    "start": 269,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 271,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 275,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "array3",
    "start": 279,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "j0",
    "start": 286,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 288,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 292,
    "end": 295
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  }
]
```
