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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 20
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
                      "start": 32,
                      "end": 33
                    },
                    "start": 25,
                    "end": 34
                  }
                ],
                "start": 23,
                "end": 36
              },
              "expression": false,
              "start": 20,
              "end": 36
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 17,
            "end": 36
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 54
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "ThisExpression",
                        "start": 78,
                        "end": 82
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 74,
                      "end": 84
                    },
                    "start": 67,
                    "end": 85
                  }
                ],
                "start": 57,
                "end": 91
              },
              "expression": false,
              "start": 54,
              "end": 91
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 41,
            "end": 91
          }
        ],
        "start": 11,
        "end": 93
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 93
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 108
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 121
      },
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 131
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
                      "value": 2,
                      "raw": "2",
                      "start": 143,
                      "end": 144
                    },
                    "start": 136,
                    "end": 145
                  }
                ],
                "start": 134,
                "end": 147
              },
              "expression": false,
              "start": 131,
              "end": 147
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 128,
            "end": 147
          }
        ],
        "start": 122,
        "end": 149
      },
      "abstract": false,
      "declare": false,
      "start": 95,
      "end": 149
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 155
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Derived",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 165
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 166,
                "end": 172
              },
              "optional": false,
              "computed": false,
              "start": 158,
              "end": 172
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 158,
            "end": 174
          },
          "definite": false,
          "start": 154,
          "end": 174
        }
      ],
      "declare": false,
      "start": 150,
      "end": 175
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 178,
            "end": 179
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 183
          },
          "optional": false,
          "computed": false,
          "start": 178,
          "end": 183
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 178,
        "end": 185
      },
      "directive": null,
      "start": 178,
      "end": 186
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 188
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
    "value": "Base",
    "start": 6,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 25,
    "end": 31
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 41,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 67,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 74,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 78,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 95,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 101,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 109,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 117,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 128,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 136,
    "end": 142
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "}",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 150,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 158,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 166,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 173,
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
    "value": "d",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 180,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  }
]
```
