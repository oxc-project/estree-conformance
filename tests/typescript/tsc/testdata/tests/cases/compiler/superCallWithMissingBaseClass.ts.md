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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
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
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 30
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 50,
                          "end": 55
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 56,
                          "end": 58
                        },
                        "optional": false,
                        "computed": false,
                        "start": 50,
                        "end": 58
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 50,
                      "end": 60
                    },
                    "start": 43,
                    "end": 61
                  }
                ],
                "start": 33,
                "end": 67
              },
              "expression": false,
              "start": 30,
              "end": 67
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 28,
            "end": 67
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 82
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 102,
                          "end": 107
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 108,
                          "end": 110
                        },
                        "optional": false,
                        "computed": false,
                        "start": 102,
                        "end": 110
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 102,
                      "end": 112
                    },
                    "start": 95,
                    "end": 113
                  }
                ],
                "start": 85,
                "end": 119
              },
              "expression": false,
              "start": 82,
              "end": 119
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 73,
            "end": 119
          }
        ],
        "start": 22,
        "end": 121
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 121
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 121
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
    "value": "Foo",
    "start": 6,
    "end": 9
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 18,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 28,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 43,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 56,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 73,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 80,
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
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 95,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 102,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "m2",
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
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  }
]
```
