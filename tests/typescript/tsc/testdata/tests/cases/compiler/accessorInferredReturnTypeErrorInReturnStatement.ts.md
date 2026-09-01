__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "basePrototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 24
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "get",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primaryPath",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 35,
                    "end": 46
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
                          "type": "VariableDeclaration",
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_this",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 59,
                                "end": 64
                              },
                              "init": {
                                "type": "ThisExpression",
                                "start": 67,
                                "end": 71
                              },
                              "definite": false,
                              "start": 59,
                              "end": 71
                            }
                          ],
                          "declare": false,
                          "start": 55,
                          "end": 72
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_this",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 84,
                                  "end": 89
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "collection",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 90,
                                  "end": 100
                                },
                                "optional": false,
                                "computed": false,
                                "start": 84,
                                "end": 100
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "schema",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 101,
                                "end": 107
                              },
                              "optional": false,
                              "computed": false,
                              "start": 84,
                              "end": 107
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primaryPath",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 108,
                              "end": 119
                            },
                            "optional": false,
                            "computed": false,
                            "start": 84,
                            "end": 119
                          },
                          "start": 77,
                          "end": 120
                        }
                      ],
                      "start": 49,
                      "end": 124
                    },
                    "expression": false,
                    "start": 46,
                    "end": 124
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 31,
                  "end": 124
                }
              ],
              "start": 27,
              "end": 129
            },
            "definite": false,
            "start": 11,
            "end": 129
          }
        ],
        "declare": false,
        "start": 7,
        "end": 130
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 130
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 130
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "basePrototype",
    "start": 11,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 31,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "primaryPath",
    "start": 35,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 55,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 59,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 77,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 84,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "collection",
    "start": 90,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 101,
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
    "value": "primaryPath",
    "start": 108,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  }
]
```
