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
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "method3",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 36
          },
          "init": {
            "type": "Literal",
            "value": "method3",
            "raw": "\"method3\"",
            "start": 39,
            "end": 48
          },
          "definite": false,
          "start": 29,
          "end": 48
        }
      ],
      "declare": false,
      "start": 23,
      "end": 49
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
        "start": 57,
        "end": 58
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 66,
                    "end": 69
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 70,
                      "end": 71
                    }
                  ],
                  "optional": false,
                  "start": 66,
                  "end": 72
                },
                "start": 65,
                "end": 72
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 87
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
                "body": [],
                "start": 90,
                "end": 92
              },
              "expression": false,
              "start": 87,
              "end": 92
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 65,
            "end": 92
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 98,
                    "end": 101
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 102,
                      "end": 103
                    }
                  ],
                  "optional": false,
                  "start": 98,
                  "end": 104
                },
                "start": 97,
                "end": 104
              }
            ],
            "key": {
              "type": "Literal",
              "value": "method2",
              "raw": "\"method2\"",
              "start": 113,
              "end": 122
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
                "body": [],
                "start": 126,
                "end": 128
              },
              "expression": false,
              "start": 123,
              "end": 128
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 97,
            "end": 128
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 134,
                    "end": 137
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 138,
                      "end": 139
                    }
                  ],
                  "optional": false,
                  "start": 134,
                  "end": 140
                },
                "start": 133,
                "end": 140
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method3",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 156
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
                "body": [],
                "start": 160,
                "end": 162
              },
              "expression": false,
              "start": 157,
              "end": 162
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 133,
            "end": 162
          }
        ],
        "start": 59,
        "end": 164
      },
      "abstract": false,
      "declare": false,
      "start": 51,
      "end": 164
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 164
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
    "value": "dec",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 23,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "method3",
    "start": 29,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 37,
    "end": 38
  },
  {
    "type": "String",
    "value": "\"method3\"",
    "start": 39,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 51,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 66,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 73,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 80,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 98,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 112,
    "end": 113
  },
  {
    "type": "String",
    "value": "\"method2\"",
    "start": 113,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 134,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "method3",
    "start": 149,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 163,
    "end": 164
  }
]
```
