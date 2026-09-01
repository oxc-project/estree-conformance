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
        "name": "T",
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
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "field",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 19
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 28,
                "end": 30
              },
              "id": null,
              "generator": false,
              "start": 22,
              "end": 30
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 30
          }
        ],
        "start": 8,
        "end": 32
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 32
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 41
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 51
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 59
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 72,
                          "end": 77
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "field",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 78,
                          "end": 83
                        },
                        "optional": false,
                        "computed": false,
                        "start": 72,
                        "end": 83
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 72,
                      "end": 85
                    },
                    "directive": null,
                    "start": 72,
                    "end": 85
                  }
                ],
                "start": 62,
                "end": 100
              },
              "expression": false,
              "start": 59,
              "end": 100
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 58,
            "end": 100
          }
        ],
        "start": 52,
        "end": 102
      },
      "abstract": false,
      "declare": false,
      "start": 33,
      "end": 102
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
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 110
            },
            "typeArguments": null,
            "arguments": [],
            "start": 104,
            "end": 112
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 114
          },
          "optional": false,
          "computed": false,
          "start": 104,
          "end": 114
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 104,
        "end": 116
      },
      "directive": null,
      "start": 104,
      "end": 116
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 116
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
    "value": "T",
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
    "type": "Identifier",
    "value": "field",
    "start": 14,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 25,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 33,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 39,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 42,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 72,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 78,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 104,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116
  }
]
```
