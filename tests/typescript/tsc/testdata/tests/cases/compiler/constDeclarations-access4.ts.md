__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
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
                      "type": "TSNumberKeyword",
                      "start": 35,
                      "end": 41
                    },
                    "start": 33,
                    "end": 41
                  },
                  "start": 32,
                  "end": 41
                },
                "init": null,
                "definite": false,
                "start": 32,
                "end": 41
              }
            ],
            "declare": false,
            "start": 26,
            "end": 42
          }
        ],
        "start": 20,
        "end": 44
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 44
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 57
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 59
          },
          "optional": false,
          "computed": false,
          "start": 56,
          "end": 59
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 62,
          "end": 63
        },
        "start": 56,
        "end": 63
      },
      "directive": null,
      "start": 56,
      "end": 64
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 66
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 68
          },
          "optional": false,
          "computed": false,
          "start": 65,
          "end": 68
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 72,
          "end": 73
        },
        "start": 65,
        "end": 73
      },
      "directive": null,
      "start": 65,
      "end": 74
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "-=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 76
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 78
          },
          "optional": false,
          "computed": false,
          "start": 75,
          "end": 78
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 82,
          "end": 83
        },
        "start": 75,
        "end": 83
      },
      "directive": null,
      "start": 75,
      "end": 84
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 86
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 88
          },
          "optional": false,
          "computed": false,
          "start": 85,
          "end": 88
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 92,
          "end": 93
        },
        "start": 85,
        "end": 93
      },
      "directive": null,
      "start": 85,
      "end": 94
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "/=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 96
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 98
          },
          "optional": false,
          "computed": false,
          "start": 95,
          "end": 98
        },
        "right": {
          "type": "Literal",
          "value": 5,
          "raw": "5",
          "start": 102,
          "end": 103
        },
        "start": 95,
        "end": 103
      },
      "directive": null,
      "start": 95,
      "end": 104
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "%=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 106
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 108
          },
          "optional": false,
          "computed": false,
          "start": 105,
          "end": 108
        },
        "right": {
          "type": "Literal",
          "value": 6,
          "raw": "6",
          "start": 112,
          "end": 113
        },
        "start": 105,
        "end": 113
      },
      "directive": null,
      "start": 105,
      "end": 114
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "<<=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 116
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 118
          },
          "optional": false,
          "computed": false,
          "start": 115,
          "end": 118
        },
        "right": {
          "type": "Literal",
          "value": 7,
          "raw": "7",
          "start": 123,
          "end": 124
        },
        "start": 115,
        "end": 124
      },
      "directive": null,
      "start": 115,
      "end": 125
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": ">>=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 127
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 129
          },
          "optional": false,
          "computed": false,
          "start": 126,
          "end": 129
        },
        "right": {
          "type": "Literal",
          "value": 8,
          "raw": "8",
          "start": 134,
          "end": 135
        },
        "start": 126,
        "end": 135
      },
      "directive": null,
      "start": 126,
      "end": 136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": ">>>=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 138
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 140
          },
          "optional": false,
          "computed": false,
          "start": 137,
          "end": 140
        },
        "right": {
          "type": "Literal",
          "value": 9,
          "raw": "9",
          "start": 146,
          "end": 147
        },
        "start": 137,
        "end": 147
      },
      "directive": null,
      "start": 137,
      "end": 148
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "&=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 150
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 152
          },
          "optional": false,
          "computed": false,
          "start": 149,
          "end": 152
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 156,
          "end": 158
        },
        "start": 149,
        "end": 158
      },
      "directive": null,
      "start": 149,
      "end": 159
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "|=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 161
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 163
          },
          "optional": false,
          "computed": false,
          "start": 160,
          "end": 163
        },
        "right": {
          "type": "Literal",
          "value": 11,
          "raw": "11",
          "start": 167,
          "end": 169
        },
        "start": 160,
        "end": 169
      },
      "directive": null,
      "start": 160,
      "end": 170
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "^=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 171,
            "end": 172
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 173,
            "end": 174
          },
          "optional": false,
          "computed": false,
          "start": 171,
          "end": 174
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 178,
          "end": 180
        },
        "start": 171,
        "end": 180
      },
      "directive": null,
      "start": 171,
      "end": 181
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 184
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 186
          },
          "optional": false,
          "computed": false,
          "start": 183,
          "end": 186
        },
        "start": 183,
        "end": 188
      },
      "directive": null,
      "start": 183,
      "end": 189
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 191
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 192,
            "end": 193
          },
          "optional": false,
          "computed": false,
          "start": 190,
          "end": 193
        },
        "start": 190,
        "end": 195
      },
      "directive": null,
      "start": 190,
      "end": 196
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 200
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 202
          },
          "optional": false,
          "computed": false,
          "start": 199,
          "end": 202
        },
        "start": 197,
        "end": 202
      },
      "directive": null,
      "start": 197,
      "end": 203
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 206,
            "end": 207
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 208,
            "end": 209
          },
          "optional": false,
          "computed": false,
          "start": 206,
          "end": 209
        },
        "start": 204,
        "end": 209
      },
      "directive": null,
      "start": 204,
      "end": 210
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 217
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 219
          },
          "optional": false,
          "computed": false,
          "start": 216,
          "end": 219
        },
        "start": 212,
        "end": 221
      },
      "directive": null,
      "start": 212,
      "end": 222
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 225
          },
          "property": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 226,
            "end": 229
          },
          "optional": false,
          "computed": true,
          "start": 224,
          "end": 230
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 233,
          "end": 234
        },
        "start": 224,
        "end": 234
      },
      "directive": null,
      "start": 224,
      "end": 235
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 247,
            "end": 248
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 251,
                "end": 252
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 253,
                "end": 254
              },
              "optional": false,
              "computed": false,
              "start": 251,
              "end": 254
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 257,
              "end": 258
            },
            "start": 251,
            "end": 258
          },
          "definite": false,
          "start": 247,
          "end": 258
        }
      ],
      "declare": false,
      "start": 243,
      "end": 259
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 270,
        "end": 271
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 275,
              "end": 281
            },
            "start": 273,
            "end": 281
          },
          "start": 272,
          "end": 281
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 283,
        "end": 286
      },
      "expression": false,
      "start": 261,
      "end": 286
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 287,
          "end": 288
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 289,
              "end": 290
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 292
            },
            "optional": false,
            "computed": false,
            "start": 289,
            "end": 292
          }
        ],
        "optional": false,
        "start": 287,
        "end": 293
      },
      "directive": null,
      "start": 287,
      "end": 294
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 300,
          "end": 301
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 302,
          "end": 303
        },
        "optional": false,
        "computed": false,
        "start": 300,
        "end": 303
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 305,
        "end": 308
      },
      "alternate": null,
      "start": 296,
      "end": 308
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 310,
          "end": 311
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 312,
          "end": 313
        },
        "optional": false,
        "computed": false,
        "start": 310,
        "end": 313
      },
      "directive": null,
      "start": 310,
      "end": 314
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 316,
          "end": 317
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 318,
          "end": 319
        },
        "optional": false,
        "computed": false,
        "start": 316,
        "end": 319
      },
      "directive": null,
      "start": 315,
      "end": 321
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 325
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 327
          },
          "optional": false,
          "computed": false,
          "start": 324,
          "end": 327
        },
        "prefix": true,
        "start": 323,
        "end": 327
      },
      "directive": null,
      "start": 323,
      "end": 328
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 330,
            "end": 331
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 333
          },
          "optional": false,
          "computed": false,
          "start": 330,
          "end": 333
        },
        "prefix": true,
        "start": 329,
        "end": 333
      },
      "directive": null,
      "start": 329,
      "end": 334
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 336,
              "end": 337
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 339
            },
            "optional": false,
            "computed": false,
            "start": 336,
            "end": 339
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 340,
            "end": 348
          },
          "optional": false,
          "computed": false,
          "start": 336,
          "end": 348
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 336,
        "end": 350
      },
      "directive": null,
      "start": 336,
      "end": 351
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 351
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
    "type": "Identifier",
    "value": "namespace",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 60,
    "end": 61
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 69,
    "end": 71
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 72,
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
    "value": "M",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "-=",
    "start": 79,
    "end": 81
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "type": "Identifier",
    "value": "M",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 89,
    "end": 91
  },
  {
    "type": "Numeric",
    "value": "4",
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
    "type": "Identifier",
    "value": "M",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "/=",
    "start": 99,
    "end": 101
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "%=",
    "start": 109,
    "end": 111
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "<<=",
    "start": 119,
    "end": 122
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ">>=",
    "start": 130,
    "end": 133
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ">>>=",
    "start": 141,
    "end": 145
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "&=",
    "start": 153,
    "end": 155
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 156,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "|=",
    "start": 164,
    "end": 166
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 167,
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
    "value": "M",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "^=",
    "start": 175,
    "end": 177
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 178,
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
    "value": "M",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 186,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 193,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 197,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 204,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 212,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 225,
    "end": 226
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 226,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 231,
    "end": 232
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 243,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 255,
    "end": 256
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 261,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 275,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 296,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 340,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  }
]
```
