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
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 64
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "start": 79,
                    "end": 90
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
                            "type": "UpdateExpression",
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 103,
                                "end": 107
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 108,
                                "end": 111
                              },
                              "optional": false,
                              "computed": false,
                              "start": 103,
                              "end": 111
                            },
                            "start": 103,
                            "end": 113
                          },
                          "directive": null,
                          "start": 103,
                          "end": 114
                        }
                      ],
                      "start": 93,
                      "end": 120
                    },
                    "expression": false,
                    "start": 90,
                    "end": 120
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 79,
                  "end": 120
                },
                {
                  "type": "TSAbstractPropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 134,
                    "end": 137
                  },
                  "typeAnnotation": null,
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 125,
                  "end": 138
                }
              ],
              "start": 73,
              "end": 140
            },
            "abstract": false,
            "declare": false,
            "start": 67,
            "end": 140
          },
          "definite": false,
          "start": 61,
          "end": 140
        }
      ],
      "declare": false,
      "start": 57,
      "end": 141
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 141
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 57,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 61,
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
    "value": "class",
    "start": 67,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 79,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 103,
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
    "value": "bar",
    "start": 108,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 111,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 125,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 134,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  }
]
```
