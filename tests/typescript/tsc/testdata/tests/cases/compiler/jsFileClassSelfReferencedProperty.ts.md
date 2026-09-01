__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StackOverflowTest",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 30
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
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 56,
                            "end": 60
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testStackOverflow",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 61,
                            "end": 78
                          },
                          "optional": false,
                          "computed": false,
                          "start": 56,
                          "end": 78
                        },
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 81,
                                "end": 85
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "testStackOverflow",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 86,
                                "end": 103
                              },
                              "optional": false,
                              "computed": false,
                              "start": 81,
                              "end": 103
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 104,
                              "end": 108
                            },
                            "optional": false,
                            "computed": false,
                            "start": 81,
                            "end": 108
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ThisExpression",
                              "start": 109,
                              "end": 113
                            }
                          ],
                          "optional": false,
                          "start": 81,
                          "end": 114
                        },
                        "start": 56,
                        "end": 114
                      },
                      "directive": null,
                      "start": 56,
                      "end": 114
                    }
                  ],
                  "start": 50,
                  "end": 118
                },
                "expression": false,
                "start": 47,
                "end": 118
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 35,
              "end": 118
            }
          ],
          "start": 31,
          "end": 120
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 120
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 120
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 120
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
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "StackOverflowTest",
    "start": 13,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 35,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 56,
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
    "value": "testStackOverflow",
    "start": 61,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 81,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "testStackOverflow",
    "start": 86,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 104,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 109,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  }
]
```
