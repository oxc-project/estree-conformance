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
        "name": "ConstructorGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 22
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 40
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
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MetaProperty",
                        "meta": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "new",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 57,
                          "end": 60
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "target",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 61,
                          "end": 67
                        },
                        "start": 57,
                        "end": 67
                      },
                      "operator": "===",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 72,
                        "end": 81
                      },
                      "start": 57,
                      "end": 81
                    },
                    "consequent": {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TypeError",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 89,
                          "end": 98
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "Constructor requires new",
                            "raw": "\"Constructor requires new\"",
                            "start": 99,
                            "end": 125
                          }
                        ],
                        "optional": false,
                        "start": 89,
                        "end": 126
                      },
                      "start": 83,
                      "end": 127
                    },
                    "alternate": null,
                    "start": 53,
                    "end": 127
                  }
                ],
                "start": 43,
                "end": 133
              },
              "expression": false,
              "start": 40,
              "end": 133
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 133
          }
        ],
        "start": 23,
        "end": 135
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 135
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 135
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
    "value": "ConstructorGuard",
    "start": 6,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 29,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 53,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 57,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 61,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 68,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 72,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 83,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "TypeError",
    "start": 89,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "String",
    "value": "\"Constructor requires new\"",
    "start": 99,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 134,
    "end": 135
  }
]
```
