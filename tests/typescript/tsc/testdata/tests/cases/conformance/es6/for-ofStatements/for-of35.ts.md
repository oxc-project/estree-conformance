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
        "name": "MyStringIterator",
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
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 33
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
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 67,
                            "end": 71
                          },
                          "value": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 73,
                            "end": 77
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 67,
                          "end": 77
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 91,
                            "end": 96
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 98,
                            "end": 99
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 91,
                          "end": 99
                        }
                      ],
                      "start": 53,
                      "end": 109
                    },
                    "start": 46,
                    "end": 109
                  }
                ],
                "start": 36,
                "end": 115
              },
              "expression": false,
              "start": 33,
              "end": 115
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 115
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 128
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 129,
                "end": 137
              },
              "optional": false,
              "computed": false,
              "start": 122,
              "end": 137
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
                      "type": "ThisExpression",
                      "start": 158,
                      "end": 162
                    },
                    "start": 151,
                    "end": 163
                  }
                ],
                "start": 141,
                "end": 169
              },
              "expression": false,
              "start": 138,
              "end": 169
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 121,
            "end": 169
          }
        ],
        "start": 23,
        "end": 171
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 171
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 183
            },
            "init": null,
            "definite": false,
            "start": 182,
            "end": 183
          }
        ],
        "declare": false,
        "start": 178,
        "end": 183
      },
      "right": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyStringIterator",
          "optional": false,
          "typeAnnotation": null,
          "start": 191,
          "end": 207
        },
        "typeArguments": null,
        "arguments": [],
        "start": 187,
        "end": 207
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 209,
        "end": 212
      },
      "start": 173,
      "end": 212
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 212
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
    "value": "MyStringIterator",
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
    "value": "next",
    "start": 29,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 73,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 91,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 122,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 129,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 151,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 158,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 173,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 178,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 184,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 187,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "MyStringIterator",
    "start": 191,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 211,
    "end": 212
  }
]
```
