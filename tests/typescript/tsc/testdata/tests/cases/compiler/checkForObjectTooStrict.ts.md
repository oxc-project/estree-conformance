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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 40
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 41,
                "end": 49
              },
              "abstract": false,
              "declare": false,
              "start": 28,
              "end": 49
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 21,
            "end": 49
          }
        ],
        "start": 14,
        "end": 52
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 52
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 66
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 75,
          "end": 78
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null,
          "start": 79,
          "end": 85
        },
        "optional": false,
        "computed": false,
        "start": 75,
        "end": 85
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 119
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
                        "type": "Super",
                        "start": 134,
                        "end": 139
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 134,
                      "end": 141
                    },
                    "directive": null,
                    "start": 134,
                    "end": 142
                  }
                ],
                "start": 123,
                "end": 149
              },
              "expression": false,
              "start": 120,
              "end": 149
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 108,
            "end": 149
          }
        ],
        "start": 86,
        "end": 152
      },
      "abstract": false,
      "declare": false,
      "start": 57,
      "end": 152
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 161,
        "end": 164
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Object",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 179
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 198
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
                        "type": "Super",
                        "start": 235,
                        "end": 240
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 235,
                      "end": 242
                    },
                    "directive": null,
                    "start": 235,
                    "end": 243
                  }
                ],
                "start": 202,
                "end": 250
              },
              "expression": false,
              "start": 199,
              "end": 250
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 187,
            "end": 250
          }
        ],
        "start": 180,
        "end": 253
      },
      "abstract": false,
      "declare": false,
      "start": 155,
      "end": 253
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 253
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 21,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 28,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 63,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 67,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 75,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 108,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 134,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 155,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 161,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 165,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 173,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 187,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 235,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 252,
    "end": 253
  }
]
```
