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
        "name": "Alias",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 21
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 33,
                      "end": 34
                    },
                    "start": 26,
                    "end": 34
                  }
                ],
                "start": 24,
                "end": 36
              },
              "expression": false,
              "start": 21,
              "end": 36
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 18,
            "end": 36
          }
        ],
        "start": 12,
        "end": 38
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 38
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
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 45
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 53
          },
          "optional": false,
          "computed": false,
          "start": 39,
          "end": 53
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Alias",
          "optional": false,
          "typeAnnotation": null,
          "start": 56,
          "end": 61
        },
        "start": 39,
        "end": 61
      },
      "directive": null,
      "start": 39,
      "end": 62
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 63
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
    "value": "Alias",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 18,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 26,
    "end": 32
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 46,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "Alias",
    "start": 56,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 8
          },
          "start": 7,
          "end": 8
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod1",
        "raw": "'./mod1'",
        "start": 14,
        "end": 22
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 22
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 24
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 34
            },
            "optional": false,
            "computed": false,
            "start": 23,
            "end": 34
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 38
          },
          "optional": false,
          "computed": false,
          "start": 23,
          "end": 38
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 41,
          "end": 42
        },
        "start": 23,
        "end": 42
      },
      "directive": null,
      "start": 23,
      "end": 42
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 44
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 54
            },
            "optional": false,
            "computed": false,
            "start": 43,
            "end": 54
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 59
          },
          "optional": false,
          "computed": false,
          "start": 43,
          "end": 59
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 75,
                      "end": 79
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_func",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 80,
                      "end": 85
                    },
                    "optional": false,
                    "computed": false,
                    "start": 75,
                    "end": 85
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 88,
                    "end": 89
                  },
                  "start": 75,
                  "end": 89
                },
                "directive": null,
                "start": 75,
                "end": 90
              }
            ],
            "start": 73,
            "end": 92
          },
          "expression": false,
          "start": 62,
          "end": 92
        },
        "start": 43,
        "end": 92
      },
      "directive": null,
      "start": 43,
      "end": 92
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 99
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 114
          },
          "optional": false,
          "computed": false,
          "start": 93,
          "end": 114
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 116
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 126
            },
            "optional": false,
            "computed": false,
            "start": 115,
            "end": 126
          },
          {
            "type": "Literal",
            "value": "def",
            "raw": "\"def\"",
            "start": 128,
            "end": 133
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 142
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 144,
                  "end": 145
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 137,
                "end": 145
              }
            ],
            "start": 135,
            "end": 147
          }
        ],
        "optional": false,
        "start": 93,
        "end": 148
      },
      "directive": null,
      "start": 93,
      "end": 149
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 155
          },
          "typeArguments": null,
          "arguments": [],
          "start": 150,
          "end": 157
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 158,
          "end": 161
        },
        "optional": false,
        "computed": false,
        "start": 150,
        "end": 161
      },
      "directive": null,
      "start": 150,
      "end": 161
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 167
          },
          "typeArguments": null,
          "arguments": [],
          "start": 162,
          "end": 169
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 170,
          "end": 173
        },
        "optional": false,
        "computed": false,
        "start": 162,
        "end": 173
      },
      "directive": null,
      "start": 162,
      "end": 173
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 179
            },
            "typeArguments": null,
            "arguments": [],
            "start": 174,
            "end": 181
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 186
          },
          "optional": false,
          "computed": false,
          "start": 174,
          "end": 186
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 174,
        "end": 188
      },
      "directive": null,
      "start": 174,
      "end": 188
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 194
          },
          "typeArguments": null,
          "arguments": [],
          "start": 189,
          "end": 196
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "def",
          "optional": false,
          "typeAnnotation": null,
          "start": 197,
          "end": 200
        },
        "optional": false,
        "computed": false,
        "start": 189,
        "end": 200
      },
      "directive": null,
      "start": 189,
      "end": 200
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 200
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 9,
    "end": 13
  },
  {
    "type": "String",
    "value": "'./mod1'",
    "start": 14,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 25,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 35,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 39,
    "end": 40
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 45,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 55,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 62,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 75,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "_func",
    "start": 80,
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
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 100,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": "prototype",
    "start": 117,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 126,
    "end": 127
  },
  {
    "type": "String",
    "value": "\"def\"",
    "start": 128,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 137,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 150,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 158,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 162,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 170,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 174,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "func",
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
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 189,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 197,
    "end": 200
  }
]
```
